import Image from "next/image";
import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";
import Link from "next/link";

const Banner = () => {
	return (
		<section className="banner-section inner-banner position-relative store">
			<div className="shape-area">
				<Image src={bubble} className="shape-1" alt="icon" />
				<Image src={ellipse7} className="shape-2" alt="icon" />
			</div>
			<div className="container position-relative">
				<div className="banner-content row justify-content-between">
					<div className="col-lg-6 col-md-10">
						<div className="main-content">
							<h2 className="visible-slowly-bottom display-four mb-4">
								<span>Check Out</span>
							</h2>
							<p className="fs-four">
								Please provide your personal information and address for
								invoicing purposes, as well as your preferred payment method.
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
                    Check Out
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
