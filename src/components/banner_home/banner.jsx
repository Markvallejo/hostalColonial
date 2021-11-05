import React  from "react";
import { Picture } from "react-responsive-picture"

import Banner from "../../../static/assets/images/banner.jpg"
import Banner_sm from "../../../static/assets/images/banner_sm.jpg"

import { StyledBannerContainer } from "./banner.style";

const BannerHome = () => {
    return(
        <StyledBannerContainer>
            <div className="banner__home">
                <Picture
                className="banner__img"
                sources={[
                    {
                    srcSet: Banner_sm,
                    media: "(max-width: 767px)",
                    },
                    {
                    srcSet: Banner,
                    media: "(max-width: 1023px)",
                    },
                    {
                    srcSet: Banner,
                    media: "(max-width: 1366px)",
                    },
                    {
                    srcSet: Banner,
                    media: "(min-width: 1367px)",
                    },
                ]}
                />

                <p className="storitelling_banner">El mejor espacio para tus eventos especiales</p>
            </div>
        </StyledBannerContainer>
    )
}

export default BannerHome