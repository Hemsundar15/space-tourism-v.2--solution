import Image from "next/image";

const ImageHolder = ({ imageUrl }) => {
    return (
        <div className="technology__imageholder">
            <div className="image image--1">
                <Image
                    src={`${imageUrl.portrait}`}
                    alt={name}
                    layout="fill"
                ></Image>
            </div>
            <div className="image image--2">
                <Image
                    src={`${imageUrl.landscape}`}
                    alt={name}
                    layout="fill"
                ></Image>
            </div>
        </div>
    );
};

export default ImageHolder;
