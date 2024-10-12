import Home from '@/ui/home/Home.component'

export default async function Initial() {
    const delay = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promessa resolvida')
        }, 10000)
    })

    console.log(delay)

    return <Home />
}
