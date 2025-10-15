import React from 'react'

const PaymentDetail = () => {
    return (
        <div className='relative z-1 text-white flex justify-center flex-col py-20 h-11/12 overflow-scroll gap-2 items-center'>
            <h1 className='text-2xl font-bold'>Payment Details</h1>
            <table className='w-2/3 h-full bg-[#2c3e5080] py-3 text-nowrap border-1 text-xl'>
                <tbody>
                    <tr className='border-1'>
                        <td rowSpan={2} className='px-3 py-2 border-1 text-center'>6 hours</td>
                        <td className='px-3 py-2 border-1 text-center'>06:00 - 12:00</td>
                        <td className='px-3 py-2 border-1 text-center'>12:00 - 18:00</td>
                        <td className='px-3 py-2 border-1 text-center'>18:00 - 24:00</td>
                        <td className='px-3 py-2 border-1 text-center'>00:00 - 06:00</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;400</td>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;400</td>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;400</td>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;300</td>
                    </tr>
                    <tr className='border-1'>
                        <td rowSpan={2} className='px-3 py-2 border-1 text-center'>12 hours</td>
                        <td className='px-3 py-2 border-1 text-center'>06:00 - 18:00</td>
                        <td className='px-3 py-2 border-1 text-center'>18:00 - 06:00</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;700</td>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;600</td>
                    </tr>
                    <tr className='border-1'>
                        <td rowSpan={2} className='px-3 py-2 border-1 text-center'>18 hours</td>
                        <td className='px-3 py-2 border-1 text-center'>06:00 - 24:00</td>
                        <td className='px-3 py-2 border-1 text-center'>12:00 - 06:00</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;1200</td>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;1100</td>
                    </tr>
                    <tr className='border-1'>
                        <td rowSpan={2} className='px-3 py-2 border-1 text-center'>24 hours</td>
                        <td className='px-3 py-2 border-1 text-center'>00:00 - 24:00</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-2 border-1 text-center'>&#8377;1800</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default PaymentDetail
