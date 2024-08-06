import Dropdown from "../../components/ui/dropdown/Dropdown";
import styles from "./page.module.css";

const Page = () => {

  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className={styles.row}>
        <div className={styles.mainTextWrapper}>
          <h1 className={styles.mainTitle}>How to Volunteer</h1>
          <h2 className={styles.mainSubTitle}>
            Guardian Saga Support Volunteer
          </h2>
          <p className={styles.mainPara}>
            Contact Isaac He for more information at{" "}
            <span className={styles.email}>isaache@guardiansaga.support</span>
          </p>
          <p className={styles.mainPara}>
            Guardian Saga Support is a nonprofit dedicated to the preservation
            of underrepresented culture. Guardian Saga Support is a 501c3
            certified organization eligible to hand out the President&apos;s
            Volunteer Service Award and provide verified volunteer hours.
            <br />
            Guardian Saga Support Departments in need of Volunteers:
          </p>
          <h2 className={styles.mainSubTitle}>
            Step By Step Process to Volunteer:
          </h2>
          <ol className={styles.mainParaList}>
              <li>
                Fill out the{" "}
                <a
                  href="https://docs.google.com/forms/d/13Y_An_1wfgP-y259YFd8V5MkmEz5VJLn_cL-D-0GRZ4/edit"
                  target="_blank"
                >
                  registration form
                </a>{" "}
                with your information and the department you are applying for.
              </li>
              <li>
                After completion, please contact volunteer support at{" "}
                <span className={styles.email}>
                  isaache@guardiansaga.support
                </span>{" "}
                with a notice, as well as include any external information you
                feel is necessary. Examples of external information may include:
                <ul>
                  <li>Credentials for specific departments</li>
                  <li>Any suggestions for the organization</li>
                </ul>
              </li>
            </ol>
        </div>
        <Dropdown/>
      </div>
    </div>
  );
};

export default Page;
