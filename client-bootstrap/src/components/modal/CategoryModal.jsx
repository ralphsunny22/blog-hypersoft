import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from "../../../src/categoryModal.module.css";
import { RiCloseLine } from "react-icons/ri";

const CategoryModal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Create New Category</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={styles.modalContent}>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input type="text" className="form-control" />
                        </div>
                    </Col>
                </Row>
            </Container>
          </div>

          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Save
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryModal