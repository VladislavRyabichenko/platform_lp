import React, { useState } from 'react'

import { Button, Input } from 'components/common'

const Coupon = () => {
  const [isOpenFormCoupon, setIsOpenFormCoupon] = useState(false)

  return (
    <>
      {isOpenFormCoupon
        ? (
          <form className="flex items-center gap-x-[5px] mt-8">
            <Input className="bg-black/[0.04] dark:bg-white/[0.06] rounded-xl py-3 px-4 text-black placeholder:text-black/[0.32] dark:text-white dark:placeholder:text-white/[0.32]" placeholder="Coupon Code" />
            <Button
              className="text-black dark:text-white w-fit h-fit text-s-bold py-3 px-6 md:px-[43px] border border-black/[0.24] dark:border-white/20"
              onClick={() => setIsOpenFormCoupon(false)}
            >
              Apply
            </Button>
          </form>
        )
        : (
          <Button
            className="w-fit h-fit m-auto left-0 right-0 text-[#2160DC] mt-8"
            onClick={() => setIsOpenFormCoupon(true)}
          >
            Have a coupon?
          </Button>
        )}
    </>
  )
}

export default Coupon
