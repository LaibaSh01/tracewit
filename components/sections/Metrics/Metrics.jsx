"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Metrics.module.css";
import Image from "next/image";
import Thunder from "@/public/images/Thunder.png";
import ArrowRight from "@/public/svgs/ArrowRight";
import ArrowLeft from "@/public/svgs/ArrowLeft";
import Graph from "@/public/svgs/Graph";
import FilledDownArrow from "@/public/svgs/FilledDownArrow";
import LessThan from "@/public/svgs/LessThan";

export default function Metrics() {
  return (
    <section className={styles.metrics}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.label}>
              <Image src={Thunder} alt="thunder" width={18} />
              <h6>Key Metrics</h6>
            </div>
            <div className={styles.heading}>
              <h2>
                AB <span>Testing</span> (Frontend & Backend)
              </h2>
              <p>
                Low-code A/B testing at infrastructure level. AI handles
                multivariate experiments & metrics.
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.swiper_container}>
            <Swiper>
              <SwiperSlide>
                <div className={styles.metric_item}>
                  <div className={styles.left_column}>
                    <div className={styles.metric_top}>
                      <h4>
                        $21,650 <FilledDownArrow />
                      </h4>
                      <p>Less Engineering Effort</p>
                    </div>
                    <Graph />
                    <div className={styles.metric_bottom}>
                      <div className={styles.metric_bottom_left}>
                        <h5>Reduction in Engineering Effort</h5>
                        <p>Just deploy the agent.</p>
                      </div>
                      <LessThan />
                    </div>
                  </div>
                  <div className={styles.right_column}>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>01</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>98% Reduction in Engineering Effort</h5>
                        <p>
                          No code changes required for running experiments. Just
                          deploy the agent.
                        </p>
                      </div>
                    </div>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>02</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>5x faster experiment rollout</h5>
                        <p>
                          From setup to deployment in under 10 minutes across
                          distributed systems.
                        </p>
                      </div>
                    </div>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>03</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>&gt;30% lift in feature adoption</h5>

                        <p>
                          AI-optimized variant testing automatically converges
                          to high-performing features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.metric_item}>
                  <div className={styles.left_column}>
                    <div className={styles.metric_top}>
                      <h4>
                        $21,650 <FilledDownArrow />
                      </h4>
                      <p>Less Engineering Effort</p>
                    </div>
                    <Graph />
                    <div className={styles.metric_bottom}>
                      <div className={styles.metric_bottom_left}>
                        <h5>Reduction in Engineering Effort</h5>
                        <p>Just deploy the agent.</p>
                      </div>
                      <LessThan />
                    </div>
                  </div>
                  <div className={styles.right_column}>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>01</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>98% Reduction in Engineering Effort</h5>
                        <p>
                          No code changes required for running experiments. Just
                          deploy the agent.
                        </p>
                      </div>
                    </div>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>02</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>5x faster experiment rollout</h5>
                        <p>
                          From setup to deployment in under 10 minutes across
                          distributed systems.
                        </p>
                      </div>
                    </div>
                    <div className={styles.pointer}>
                      <div className={styles.point_wrapper}>
                        <div className={styles.point_number}></div>
                        <div className={styles.point_number_inner}></div>
                        <span>03</span>
                      </div>

                      <div className={styles.pointer_info}>
                        <h5>&gt;30% lift in feature adoption</h5>

                        <p>
                          AI-optimized variant testing automatically converges
                          to high-performing features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>

            <div className={styles.drag_text}>
              <ArrowLeft /> <p>Drag to explore</p> <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
