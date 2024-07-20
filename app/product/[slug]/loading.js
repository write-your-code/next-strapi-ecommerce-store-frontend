import { ProductDetailSkeleton, ReletedProductSkeleton } from '@/components/Skeletons'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
    return (
      <ProductDetailSkeleton />
    )
}

export default Loading