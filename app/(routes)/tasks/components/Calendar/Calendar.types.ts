import { Event, Company } from '@prisma/client';

export type CalendarProps = {
  companies: Company[];
  events: Event[];
};
