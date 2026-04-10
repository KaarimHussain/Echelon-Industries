export default function Divider({
    upperbox,
    bottombox,
    variant,
    onStart
}: {
    upperbox?: React.ReactNode,
    bottombox?: React.ReactNode,
    variant?: React.ReactNode,
    onStart?: React.ReactNode
} = {}) {
    return (
        <div className="hidden lg:grid grid-cols-50 w-full h-20">
            {!variant && (
                <>
                    {/* Empty space */}
                    {!onStart && (
                        <div className="col-span-41"></div>
                    )}
                    {onStart && (
                        <div className="col-span-3"></div>
                    )}
                    {/* Secondary box */}
                    <div className="col-span-3 bg-secondary relative">
                        {bottombox && (
                            <div className="absolute bottom-[-100%] left-0 h-20 w-full aspect-square bg-white"></div>
                        )}
                    </div>
                    {/* White section */}
                    <div className="col-span-3 bg-white relative">
                        {upperbox && (
                            <div className="absolute top-[-100%] left-0 h-20 w-full aspect-square bg-white"></div>
                        )}
                    </div>
                    {/* Primary box */}
                    <div className="col-span-3 bg-primary"></div>
                    {onStart && (
                        <div className="col-span-38"></div>
                    )}
                </>
            )}

            {variant && (
                <>
                    {/* Empty space */}
                    {!onStart && (
                        <div className="col-span-41"></div>
                    )}
                    {onStart && (
                        <div className="col-span-3"></div>
                    )}
                    {/* Secondary box */}
                    <div className="col-span-3 bg-secondary relative">
                        {bottombox && (
                            <div className="absolute bottom-[-100%] left-0 h-20 w-full aspect-square bg-white"></div>
                        )}
                    </div>
                    {/* White section */}
                    <div className="col-span-3 bg-white relative">
                        {upperbox && (
                            <div className="absolute top-[-100%] left-0 h-20 w-full aspect-square bg-white"></div>
                        )}
                    </div>
                    {/* Primary box */}
                    <div className="col-span-3 bg-white"></div>
                    {onStart && (
                        <div className="col-span-38"></div>
                    )}
                </>
            )}


        </div>
    );
}