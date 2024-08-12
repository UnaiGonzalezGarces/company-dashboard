import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Header } from './components/Header';
import { CompanyInformation } from './components/CompanyInformation';

export default async function CompanyIdPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const company = await db.company.findUnique({
    where: {
      id: params.companyId,
      userId,
    },
  });

  if (!company) {
    return redirect('/');
  }

  return (
    <div>
      <Header />
      <CompanyInformation company={company} />
      <p>Footer Company</p>
    </div>
  );
}
