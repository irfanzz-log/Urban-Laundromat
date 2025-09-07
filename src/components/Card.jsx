export default function content(props) {
    return (
        <>
                <div className="cards col-lg-4">
                    <div className="cards-img">
                        <img src={`/img/images/` + props.img } alt="" />
                    </div>
                    <div className="cards-content">
                        <p className="text-header fs-4 fw-semibold">{props.header}</p>
                        <p className="text-muted">{props.text}</p>
                    </div>
                </div>
        </>
    )
}