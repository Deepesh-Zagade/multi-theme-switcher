export default function Product(props: any) {
    const { data } = props;
    return (
        <div className="p-2 md:p-3 m-2 md:m-3 mb-1 ">
            <div className="h-30 md:h-40 w-30 md:w-40 border border-stone-300 bg-stone-200 rounded-lg shadow">
                <img src={data.images[0]} alt={data.title} className="object-cover rounded-lg" />
            </div>
            <div className="w-30 md:w-40 h-12">
                <p className="text-wrap text-sm md:text-lg">
                    {data.title}
                </p>
            </div>
        </div>
    )
}