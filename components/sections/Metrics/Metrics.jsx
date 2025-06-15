"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./Metrics.module.css";
import Graph from "@/public/svgs/Graph";
import FilledDownArrow from "@/public/svgs/FilledDownArrow";
import "swiper/css/pagination";
import Label from "@/components/ui/Label";
import Code from "@/public/svgs/Code";
import CodeInterface from "@/public/svgs/CodeInterface";
import Deployed from "@/public/svgs/Deployed";
import API from "@/public/svgs/API";
import Service from "@/public/svgs/Service";
import Database from "@/public/svgs/Database";
import Send from "@/public/svgs/Send";
import PipeLineDiagram from "@/public/svgs/PipeLineDiagram";
import Security from "@/public/svgs/Security.svg";

export default function Metrics() {
  return (
    <section className={styles.metrics}>
      <div className="box">
        <div className={styles.content}>
          <div className={styles.top}>
            <Label text="Key Metrics" />
          </div>
          <div className={styles.container}>
            <div className={styles.swiper_container}>
              <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ el: ".custom-pagination", clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              >
                <SwiperSlide>
                  <div className={styles.slide_wrapper}>
                    <div className={styles.heading}>
                      <h2>
                        <span>Security</span> Analytics
                      </h2>
                      <p>
                        Low-code A/B testing at infrastructure level. AI handles
                        multivariate experiments & metrics.
                      </p>
                    </div>
                    <div className={styles.metric_item}>
                      <div className={`${styles.left_column} ${styles.fifth}`}>
                        <Image src={Security} alt="security" />
                        <div className={styles.metric_bottom}>
                          <p>Compliant & Auditable Logs</p>
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
                            <h5> 24/7 AI-powered anomaly detection</h5>
                            <p>
                              Find threats and vulnerabilities without
                              traditional rule-based setups.
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
                            <h5>&lt;5 mins mean-time-to-detection (MTTD)</h5>
                            <p>
                              Real-time alerting on suspicious traffic patterns
                              or data exfiltration risks.
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
                            <h5>Compliance-ready tracing logs</h5>

                            <p>
                              Helps teams meet GDPR, SOC2, and HIPAA
                              requirements with full traceability.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
               
                <SwiperSlide>
                  <div className={styles.slide_wrapper}>
                    <div className={styles.heading}>
                      <h2>
                        Tracing Agent / <span> Observability</span>
                      </h2>
                      <p>
                        Low-code A/B testing at infrastructure level. AI handles
                        multivariate experiments & metrics.
                      </p>
                    </div>
                    <div className={styles.metric_item}>
                      <div className={`${styles.left_column} ${styles.second}`}>
                        <span className={styles.tag}>No Code</span>
                        <div className={styles.architecture}>
                          <div className={styles.arch_top}>
                            <div className={styles.arch_container}>
                              <div className={styles.icon}>
                                <CodeInterface />
                              </div>
                              <div className={styles.arch_info}>
                                <h6>Frontend UI</h6>
                                <div className={styles.bar}></div>
                              </div>
                            </div>
                            <div className={styles.connector}></div>
                            <div className={styles.arch_container}>
                              <div className={styles.icon}>
                                <Deployed />
                              </div>
                              <div className={styles.arch_info}>
                                <h6>External</h6>
                                <div className={styles.bar}></div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${styles.arch_container_services} ${styles.API}`}
                          >
                            <div className={styles.icon}>
                              <API />
                            </div>
                            <div className={styles.arch_info}>
                              <h6>API Gateway</h6>
                              <div className={styles.bar}></div>
                            </div>
                            <div className={styles.glow}></div>
                          </div>
                          <div className={styles.arch_container_services}>
                            <div className={styles.icon}>
                              <Service />
                            </div>
                            <div className={styles.arch_info}>
                              <h6>Service A</h6>
                              <div className={styles.bar}></div>
                            </div>
                          </div>
                          <div className={styles.arch_container_services}>
                            <div className={styles.icon}>
                              <Database />
                            </div>
                            <div className={styles.arch_info}>
                              <h6>Database</h6>
                              <div className={styles.bar}></div>
                            </div>
                          </div>
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
                            <h5>100% code-free tracing coverage</h5>
                            <p>
                              Full request-response and service metrics without
                              code instrumentation.
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
                            <h5>60% reduction in debugging time</h5>
                            <p>
                              Root cause insights generated by AI using
                              LLM-based log/event tracing.
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
                            <h5>&gt;90% endpoint trace accuracy</h5>

                            <p>
                              Captures complete data from services, customizable
                              via UI filtering.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.slide_wrapper}>
                    <div className={styles.heading}>
                      <h2>
                        Product <span>Analytics</span> (LLM-powered)
                      </h2>
                      <p>
                        Low-code A/B testing at infrastructure level. AI handles
                        multivariate experiments & metrics.
                      </p>
                    </div>
                    <div className={styles.metric_item}>
                      <div className={`${styles.left_column} ${styles.third}`}>
                        <div className={styles.top}>
                          <span className={styles.tag}>
                            Ask questions. Get instant product insights.
                          </span>
                          <p>No SQL, no analysts — just answers.</p>
                        </div>
                        <div className={styles.glow}></div>
                        <div className={styles.chat}>
                          <div className={styles.suggestion}>
                            <h6>Which step has the most churn?</h6>
                            <h6>Top features by usage?</h6>
                            <h6>Most viewed screens yesterday?</h6>
                          </div>
                          <div className={styles.input}>
                            <p>Ask questions. Get instant product insights.</p>
                            <Send />
                          </div>
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
                            <h5> 1-click metrics with natural language</h5>
                            <p>
                              Just type your question; LLM handles the queries
                              and dashboard.
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
                            <h5>0 analysts required</h5>
                            <p>
                              Automated dashboards—no data scientists or SQL
                              knowledge needed.
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
                            <h5>&gt;3x faster insight delivery</h5>

                            <p>
                              Compared to traditional Mixpanel/GA setups that
                              require manual tracking and dashboards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.slide_wrapper}>
                    <div className={styles.heading}>
                      <h2>
                        Data <span> Pipelines</span>
                      </h2>
                      <p>
                        Low-code A/B testing at infrastructure level. AI handles
                        multivariate experiments & metrics.
                      </p>
                    </div>
                    <div className={styles.metric_item}>
                      <div className={`${styles.left_column} ${styles.fourth}`}>
                        <PipeLineDiagram />
                        <div className={styles.metric_bottom}>
                          <p>Streaming in &lt;5 seconds</p>
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
                            <h5> &lt;5s Guaranteed data delivery latency</h5>
                            <p>
                              Real-time data streaming from any source to any
                              destination.
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
                            <h5>
                              Plug-n-play support for 20+ sources/destinations
                            </h5>
                            <p>BigQuery, S3, Snowflake, Kafka, and more.</p>
                          </div>
                        </div>
                        <div className={styles.pointer}>
                          <div className={styles.point_wrapper}>
                            <div className={styles.point_number}></div>
                            <div className={styles.point_number_inner}></div>
                            <span>03</span>
                          </div>

                          <div className={styles.pointer_info}>
                            <h5>90% less schema maintenance</h5>

                            <p>
                              Self-learning agent adapts to your data models
                              automatically.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className={styles.slide_wrapper}>
                    <div className={styles.heading}>
                      <h2>
                        AB <span>Testing</span> (Frontend & Backend)
                      </h2>
                      <p>
                        Low-code A/B testing at infrastructure level. AI handles
                        multivariate experiments & metrics.
                      </p>
                    </div>
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
                          <h5>Reduction in Engineering Effort</h5>
                          <p>Just deploy the agent.</p>
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
                              No code changes required for running experiments.
                              Just deploy the agent.
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
                              From setup to deployment in under 10 minutes
                              across distributed systems.
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
                              AI-optimized variant testing automatically
                              converges to high-performing features.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="custom-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
