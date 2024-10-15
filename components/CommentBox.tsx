"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
type commentProps = {
  img: string | StaticImageData;
  name: string;
  comment: string;
};

const CommentBox = ({ img, name, comment }: commentProps) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [commentOpen, setCommentOpen] = useState(false);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <div className="single-box p-3 p-sm-6 box-style box-second d-flex flex-wrap flex-sm-nowrap gap-5">
      <div className="img-area">
        <Image src={img} className="max-un" alt="Image" />
      </div>
      <div className="info-area">
        <div className="title-area d-flex align-items-center flex-wrap gap-2">
          <h5>{name}</h5>
          <span>10 Jan, 2023 . 4:00 Pm</span>
        </div>
        <p className="py-5">{comment}</p>
        <button
          onMouseMove={handleMouseMove}
          style={style}
          onClick={() => setCommentOpen(!commentOpen)}
          className="box-style reply-btn btn-box btn-cmd">
          Reply
        </button>
        <form
          action="#"
          className={`comment-form mt-5 ${commentOpen && "d-block"}`}>
          <div className="d-flex gap-3">
            <input placeholder="Write a comment.." className="py-3" />
            <button
              onMouseMove={handleMouseMove}
              style={style}
              className="box-style btn-box px-2 px-sm-5 px-lg-6">
              <i className="material-symbols-outlined mat-icon m-0 fs-xxl">
                near_me{" "}
              </i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
