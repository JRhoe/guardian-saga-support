"use client"
import React, { useState } from 'react';
import styles from "./Dropdown.module.css"

const Dropdown = () => {
    const [activeDrop1, setActiveDrop1] = useState(false);
    const [activeDrop2, setActiveDrop2] = useState(false);
    const [activeDrop3, setActiveDrop3] = useState(false);
    const [activeDrop4, setActiveDrop4] = useState(false);
    return (
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdown} onClick={() => setActiveDrop1((prev) => !prev)}>
            <div className={styles.dropHeader}>
              <p className={styles.dropTitle}>Outreach Department</p>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className={styles.dropDivider}></div>
            {activeDrop1  &&
            <div className={styles.dropMain}>
              <p className={styles.dropPara}>
                Guardian Saga Support seeks to establish connections with
                various organizations and individuals with similar missions. The
                outreach department serves as a link between Guardian Saga
                Support and other entities. The outreach department also plans
                and organizes both open and volunteer-exclusive events.
              </p>
            </div>
            }
          </div>
          <div className={styles.dropdown} onClick={() => setActiveDrop2((prev) => !prev)}>
            <div className={styles.dropHeader}>
              <p className={styles.dropTitle}>Blogs / Multimedia Department</p>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className={styles.dropDivider}></div>
            {activeDrop2  &&
              <div className={styles.dropMain}>
                <p className={styles.dropSubTitle}>
                  The blog/ multimedia department contains two major roles:
                </p>
                <p className={styles.dropPara}>
                  Writers - Writers within the blog/ multimedia department will be
                  assigned a topic based on an ongoing holiday, event, or topic
                  that relates to Guardian Saga Support and its mission. Writers
                  will write an article that will be published on Guardian Saga
                  Support&apos;s website.
                  <br />
                  <br />
                  Reposts - The blog/ multimedia department will work closely with
                  the outreach department to find existing articles and blogs that
                  cover topics relating to Guardian Saga Support&apos;s mission.
                  The department will contact the organizations or individual
                  writers and WITH THEIR CONSENT, submit the article for reposting
                  on Guardian Saga Support&apos;s website. Proper citation and
                  credentials are required for this process.
                </p>
              </div>
            }
          </div>
          <div className={styles.dropdown} onClick={() => setActiveDrop3((prev) => !prev)}>
            <div className={styles.dropHeader}>
              <p className={styles.dropTitle}>Funding Department</p>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className={styles.dropDivider}></div>
            {activeDrop3  &&
              <div className={styles.dropMain}>
                <p className={styles.dropPara}>
                  The funding department focuses on the application process to
                  various grants and awards.
                </p>
                <p className={styles.dropSubTitle}>
                  The Funding Department is specifically looking for:
                </p>
                <p className={styles.dropPara}>
                  <b>Individuals with experience</b> (please contact
                  nexusofguardianart@gmail.com if you believe this applies to you)
                  or <b>individuals 18+</b>
                </p>
              </div>
            }
          </div>
          <div className={styles.dropdown} onClick={() => setActiveDrop4((prev) => !prev)}>
            <div className={styles.dropHeader}>
              <p className={styles.dropTitle}>
                School Guardian Saga Support Clubs (High Schools and Colleges)
              </p>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className={styles.dropDivider}></div>
            {activeDrop4  &&
              <div className={styles.dropMain}>
                <p className={styles.dropSubTitle}>
                  Scale Guardian Saga Support to schools
                </p>
                <p className={styles.dropPara}>
                  Our school clubs are dedicated to channeling hope, support and
                  awareness towards the underprivileged Community both on and off
                  our school campuses. We represent Guardian Saga Support in our
                  mission to support the effort to build awareness for
                  underprivileged communities.
                  <br />
                  <br />
                  Our team works to:
                </p>
                <ul>
                  <li>
                    Promote Guardian Saga Support programs to high schoolers and
                    college students to recruit volunteers
                  </li>
                  <li>
                    Increase awareness and understanding about Indigenous history
                    and culture in high schools and colleges
                  </li>
                  <li>
                    Coordinate Guardian Arts training and other events such as
                    fund raising to high school and college students in a scalable
                    way
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
    );
}

export default Dropdown;
