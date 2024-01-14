// eslint-disable-next-line react/prop-types
export default function Card({img_src, culor, text}) {

    const cardStyle = {
        backgroundColor: culor,
    };
    return(
            <div className={`relative group flex flex-col h-1/5 md:h-full justify-center items-center md:p-6 flex-1 md:flex-1 mix-blend-multiply`}
                 style={cardStyle}>
                <img src={img_src} alt="club logo" className={'mix-blend-multiply h-full'}/>
                <div
                    className={'flex flex-col items-center justify-center z-10 absolute md:mx-4 gap-5 md:my-0 mx-0 inset-0 my-3 -translate-x-full md:translate-x-0 group-active:mx-3 group-active:-translate-x-0 md:delay-0 group-active:delay-0 delay-3000 duration-169 md:-translate-y-full md:group-hover:translate-y-0 md:group-hover:my-4 md:duration-1000'}
                    style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                    <p className={'font-sans-serif text-5xl font-medium'}>{text}</p>
                    <button className={'rounded-full font-display border py-2 px-9'}>VIEW ALL</button>
                </div>
            </div>


    )
}
