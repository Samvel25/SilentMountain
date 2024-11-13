import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
	return (
		<section className="banner-section inner-banner position-relative about career">
			<div className="shape-area">
				<Image src={bubble} className="shape-1" alt="icon" />
				<Image src={ellipse7} className="shape-2" alt="icon" />
			</div>
			<div className="container position-relative">
				<div className="banner-content row justify-content-between">
					<div className="col-lg-6 col-md-10">
						<div className="main-content">
							<h2 className="visible-slowly-bottom display-four mb-6">
								Join a <span className="d-inline">team of passionate</span>{" "}
								people
							</h2>
							<p className="fs-four">
								we are always building towards an efficient and collaborative
								team of the best game developers around.
							</p>
						</div>
					</div>
					{/* <div className="col-lg-6 col-md-10 d-grid align-items-end justify-content-end">
            <div className="breadcrumb-area position-absolute end-0 bottom-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 py-3 px-8 fs-six d-flex align-items-end justify-content-end">
                  <li className="breadcrumb-item p-0 m-0">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Career
                  </li>
                </ol>
              </nav>
            </div>
          </div> */}
				</div>
			</div>
		</section>
	);
};

export default Banner;
