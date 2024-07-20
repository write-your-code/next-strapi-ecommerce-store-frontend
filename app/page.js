import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchData } from '@/store/utils/api'
import Image from 'next/image'

export default async function Home() {
  const products = await getData();
  return (
    <>
      <Hero />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className='text-center mx-auto my-[50px] md:my-[80px] max-w-[800px]'>
          <div className='text-[26px] md:text-[32px] leading-tight font-semibold mb-5'>
            Cushioning for Your Miles
          </div>
          <div className='text-md md:text-lg'>
            A lightweight Nike ZoomX midsole is combined with
            increased stack heights to help provide cushioning
            during extended stretches of running.
          </div>
        </div>
        {/* heading and paragaph end */}
        {/* product card start */}
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4'>
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/* product card end */}

      </Wrapper>
    </>
  )
}

async function getData() {
  try {
    const res = await fetchData('/api/products?populate=*', 'no-cache');
    // console.log("res is inside page:", res.data[0].attributes.thumbnail.data[0].attributes.url)
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch 😵‍💫 data");
    // }
    // const data = await res.json();
    return res;
  } catch (error) {
    console.log("error is here:", error);
  }
}