import { Article } from '@/_components/Article.component'
import Sidebar from '@/_components/Sidebar/Sidebar.component'
import { images } from '@/content/images'

export default function Home() {
    return (
        <main className="px-4 py-6 lg:h-screen">
            <div className="grid h-full grid-cols-[70%_1fr] gap-4 lg:grid-cols-[72%_1fr] 2xl:grid-cols-[76%_1fr]">
                <div className="grid h-full grid-cols-2 items-start gap-x-4 gap-y-[4vh] 2xl:grid-cols-3">
                    {images.map((image, i) => (
                        <Article src={image} key={i} />
                    ))}
                </div>
                <Sidebar />
            </div>
        </main>
    )
}
