import React, { useCallback, useState, useMemo } from "react";
import LinkImg from "./LinkImg";
import ImgModal from "./ImgModal";
import Gallery from "react-photo-gallery";
import { makeStyles } from "@material-ui/core/styles";

export default function ImgGallery({ photos, children, direction }) {
  const classes = useStyles();
  const [zoomImg, setZoomImg] = useState(undefined);

  const onClick = useCallback(
    (photo) => {
      setZoomImg(photo);
    },
    [setZoomImg]
  );

  const renderImage = useCallback(
    ({ photo, margin, direction, top, left }) => (
      <LinkImg
        photo={photo}
        onClick={() => onClick(photo)}
        margin={margin}
        direction={direction}
        top={top}
        left={left}
        hideInfo
      />
    ),
    [onClick]
  );

  const leftButtonDisabled = useMemo(() => zoomImg && zoomImg.id === 0, [
    zoomImg,
  ]);
  const rightButtonDisabled = useMemo(
    () => zoomImg && zoomImg.id === photos.length - 1,
    [zoomImg, photos]
  );
  const leftButtonOnClick = useCallback(
    () => setZoomImg(photos[zoomImg.id - 1]),
    [zoomImg, photos, setZoomImg]
  );
  const rightButtonOnClick = useCallback(
    () => setZoomImg(photos[zoomImg.id + 1]),
    [zoomImg, photos, setZoomImg]
  );
  const onClose = useCallback(() => setZoomImg(null), [setZoomImg]);

  return (
    <>
      <ImgModal
        photo={zoomImg}
        onClose={onClose}
        leftButtonDisabled={leftButtonDisabled}
        leftButtonOnClick={leftButtonOnClick}
        rightButtonDisabled={rightButtonDisabled}
        rightButtonOnClick={rightButtonOnClick}
      />
      <div className={classes.container}>
        {children}
        <Gallery
          margin={8}
          direction={direction || "row"}
          photos={photos}
          renderImage={renderImage}
        />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "72px",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  },
}));
