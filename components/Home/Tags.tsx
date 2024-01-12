export default function Tags({tags}: any) {
    // Tag color
    const tagColor = (i: any) => (
        i%2 === 0
            ? "font-medium text-sky-500"
            : "font-medium text-orange-500"
    );

    return (
        <div className=" flex gap-2 flex-wrap leading-4 mt-2">
            {/* Tag */}
            {tags.map((tag: any,i: any) => (
                <p 
                    className={tagColor(i)}
                    key={i}
                >
                    #{tag}
                </p>
            ))}
        </div>
    )
}