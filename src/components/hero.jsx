
import Image from "next/image"
import background from "@/assets/image/jpg/image-01.jpg"
import Styles from "@/styles/components/hero.module.css"





 const  Hero = () => {
    return (

        <>
            <div className={Styles.wrapper}>
                <h1 className={Styles.heroText}>Plan.<br/>Manage.<br/>Build</h1>
                <div>/</div>
                <h3>Our Difference Is In The Finishing</h3>
                <button>Work</button>
            </div>
            
            <Image className={Styles.heroImage} src = {background} width={3840} height={2160} alt="hero image" />
        </>

    );
}

export default Hero;