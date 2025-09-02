import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { SearchParams } from 'nuqs/server';

export const metadata = {
  title: 'Dashboard'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title='Next Starter'
            description='next and shadcn starter template'
          />
        </div>
        <Separator />
      </div>
    </PageContainer>
  );
}
