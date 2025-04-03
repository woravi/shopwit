
'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image
        src='/images/logo.svg'
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className='p-6 w-1/3 rounded-lg shadow-md text-center'>
        <h1 className='text-3xl font-bold mb-4'>อุ๊บ!!sorry.</h1>
        <p className='text-destructive'>ไม่พบหน้าที่คุณต้องการครับ</p>
        <Button variant='outline' className='mt-4 ml-2' asChild>
          <Link href='/'>ไปหน้าแรก</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
