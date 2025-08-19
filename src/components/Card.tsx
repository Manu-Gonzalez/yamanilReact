import '../css/components/Card.css'
interface CardProperties {
    children: React.ReactNode
}

export const Card = ({children}:CardProperties) => {
    return(
        <>
            <div className="card-task">
                {children}
            </div>
        </>
    )
}