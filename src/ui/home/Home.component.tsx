import { Article } from '@/_components/Article.component'
import Sidebar from '@/_components/Sidebar/Sidebar.component'
import { images } from '@/content/images'

export default function Home() {
    return (
        <main className="px-3 py-6 md:px-4 lg:h-screen">
            {process.env.VERCEL_PROJECT_PRODUCTION_URL}
            <div className="flex flex-col-reverse gap-16 md:grid md:h-full md:grid-cols-[70%_1fr] md:gap-4 lg:grid-cols-[72%_1fr] 2xl:grid-cols-[76%_1fr]">
                <div className="grid h-full items-start gap-x-4 gap-y-10 md:grid-cols-2 md:gap-y-[4vh] 2xl:grid-cols-3">
                    {images.map((image, i) => (
                        <Article src={image} key={i} />
                    ))}
                </div>
                <Sidebar />
            </div>
        </main>
    )
}
