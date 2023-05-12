import React from 'react'
import { MdArrowRight, MdArrowRightAlt, MdOutlineArrowRight } from 'react-icons/md'
import { setSyntheticTrailingComments } from 'typescript'

const CollectionProducts = () => {
    return (
        <section>
            <div className="container mx-auto space-x-10">
                <div className="grid lg:grid-cols-2">
                    <div className="relative text-white p-5">
                        <div>
                            <img className="w-100" src="/images/img-3.jpg" alt="" />
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 px-8 w-1/2">
                            <p>Up to 50-70%</p>
                            <h1 className="text-3xl mb-4"> Women's Sportwere Sales</h1>
                            <div className="flex items-center">
                                Shop Now <MdArrowRightAlt className="ms-4" />
                            </div>
                        </div>

                    </div>
                    <div className="relative text-white p-5">
                        <div>
                            <img className="w-100" src="/images/img-3.jpg" alt="" />
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 px-8 w-1/2">
                            <p>Up to 50-70%</p>
                            <h1 className="text-3xl mb-4"> Women's Sportwere Sales</h1>
                            <div className="flex items-center">
                                Shop Now <MdArrowRightAlt className="ms-4" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default CollectionProducts