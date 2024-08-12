'use client';

import { FormEventProps } from './FormEvent.types';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  eventName: z.string().min(2),
  companySelected: z.object({
    name: z.string().min(2),
    id: z.string(),
  }),
});

export function FormEvent(props: FormEventProps) {
  const { setNewEvent, setOpen, companies, setOnSaveNewEvent } = props;
  const [selectedCompany, setSelectedCompany] = useState({
    name: '',
    id: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: '',
      companySelected: {
        name: '',
        id: '',
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setNewEvent(values);
    setOpen(false);
    setOnSaveNewEvent(true);
  };

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.name === newValue
    );
    if (selectedCompany) {
      setSelectedCompany({
        name: selectedCompany.name,
        id: selectedCompany.id,
      });
      form.setValue('companySelected.name', selectedCompany.name);
      form.setValue('companySelected.id', selectedCompany.id);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='eventName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder='Event name...' />
              </FormControl>
              <FormDescription>This is your event name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='companySelected.name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <Select
                onValueChange={(newValue) => {
                  field.onChange(newValue), handleCompanyChange(newValue);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a company'></SelectValue>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company.id} value={company.name}>
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Create event</Button>
      </form>
    </Form>
  );
}
