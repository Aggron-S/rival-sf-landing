import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { chevronDown } from "../imports";
import styles from "../accordion-style.module.css";

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        <h5>{header}</h5>
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

const AccordionComponent = ({ header, content }) => {
  return (
    <div className={styles.accordion}>
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header={header}>
          <p>{content}</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
