import Image from "next/image";
import {blogsList} from "../../utils/constants";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <section className="bg-custom-white py-[50px] md:pt-[80px] md:pb-[100px]">
            <div className="wrapper">
                <h2 className={'text-custom-black font-bold text-4xl'}>Media and Insights</h2>
                <div className="mx-auto mt-5 grid w-full grid-cols-1 gap-x-2 gap-[40px] md:max-w-[70%] md:gap-[60px] lg:max-w-full lg:grid-cols-2 lg:gap-y-[70px] lg:gap-x-[25px] xl:grid-cols-3 xl:gap-[25px] xl:gap-y-5">
                    {blogsList.map((item, index) => (
                        <BlogCard
                            key={index}
                            imageSrc={item.imageSrc}
                            altText={item.altText}
                            date="May 9, 2023" // You can replace this with the actual date
                            description={item.description}
                            link={item.link}
                            playIconSrc="/assets/images/play.png"
                        />

                    ))}

                </div>
            </div>
        </section>
    );
};

export default Blog;
