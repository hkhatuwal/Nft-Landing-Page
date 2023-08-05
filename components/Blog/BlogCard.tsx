import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    altText: string;
    date: string;
    description: string;
    link: string;
    playIconSrc: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
                                               imageSrc,
                                               altText,
                                               date,
                                               description,
                                               link,
                                               playIconSrc,
                                           }) => {
    return (
        <div className="bg-card-bg-light rounded-3xl">
            <div className="relative h-[200px] md:h-[280px] xl:h-[234px]">
                <Image
                    src={imageSrc}
                    alt={altText}
                    className="rounded-t-3xl"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="p-5">
                <h2 className="mb-[20px] text-[22px] leading-[28px] text-custom-black/50">
                    {date}
                </h2>

                <p className="text-custom-black text-xl leading-6 lg:min-h-[140px] xl:min-h-[168px] 2xl:min-h-[140px]">
                    {description}
                </p>

                <a href={link} target="_blank" className="mt-2">
                    <Image src={playIconSrc} width={50} height={50}/>
                </a>
            </div>
        </div>
    );
};

export default BlogCard;