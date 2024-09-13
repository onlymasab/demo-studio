import Image from "next/image"
import Disnep from "@/assets/logos/png/disnep_logo.png"
import DropBox from "@/assets/logos/png/dropbox_logo.png"
import Monday from "@/assets/logos/png/monday_logo.png"
import Ncr from "@/assets/logos/png/ncr_logo.png"
import Rakuten from "@/assets/logos/png/rakuten_logo.png"
import User01 from "@/assets/image/jpg/user-01.jpg"
import User02 from "@/assets/image/jpg/user-02.jpg"
import User03 from "@/assets/image/jpg/user-03.jpg"
import User04 from "@/assets/image/jpg/user-04.jpg"

const Showcase = () => {
    return (
        <>
            <div>
                <Image src={Disnep} width={56} height={36} alt="" />
                <Image src={DropBox} width={56} height={36} alt="" />
                <Image src={Monday} width={56} height={36} alt="" />
                <Image src={Ncr} width={56} height={36} alt="" />
                <Image src={Rakuten} width={56} height={36} alt="" />
            </div>
            <h1>To enhance the growth of your website, it{"'"}s essential to expedite the release of new pages.</h1>
            <div>
                <Image src={User01} width={156} height={136} alt="" />
                <Image src={User02} width={156} height={136} alt="" />
                <Image src={User03} width={156} height={136} alt="" />
                <Image src={User04} width={156} height={136} alt="" />
            </div>
            <h1>/</h1>
            <div>
                <h3>We Received A Great Amoun Of Work in Just 2 Weeks Timeline!</h3>
                <span>Daniel, Design lead @Google</span>
            </div>
        </>
    );
}

export default Showcase;