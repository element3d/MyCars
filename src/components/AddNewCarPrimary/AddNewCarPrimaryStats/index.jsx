import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Modal from "react-modal";

import styles from "./styles.module.css";
import { Input, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { _getTitle } from "@/components/dependencies/utils";

const { Title } = Typography;

const customStyles = {
  content: {
    width: "520px",
    height: "700px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "var(--border-radius)",
    padding: "35px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
};

const AddNewCarPrimaryStats = ({
  data,
  title,
  type,
  onSelect,
  selectInputValue,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [modalIsMounted, setModalIsMounted] = useState(false);
  let inputRef = useRef(null);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCarBrandClick = useCallback(
    (item) => {
      setIsOpen(false);
      onSelect(item, type);
    },
    [onSelect, type]
  );

  const handleInputChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredCarsList = useMemo(() => {
    if (!data) {
      return [];
    }
    if (!searchValue) {
      return data;
    }
    return data.filter((element) => {
      return element?.toLowerCase().includes(searchValue?.toLowerCase());
    });
  }, [data, searchValue]);

  useEffect(() => {
    if (modalIsMounted && inputRef.current) {
      inputRef.current.focus({
        cursor: "end",
      });
    }
  }, [modalIsMounted]);

  return (
    <div className={styles.container}>
      {selectInputValue[type] ? (
        <>
          <Title level={5} onClick={openModal} className={styles.title}>
            {title}
          </Title>
          <Title level={3} onClick={openModal} className={styles.title}>
            {_getTitle(selectInputValue[type], type)}
          </Title>
        </>
      ) : (
        <Title level={3} onClick={openModal} className={styles.title}>
          {title}
        </Title>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <Input
            ref={(_ref) => {
              setModalIsMounted(true);
              return (inputRef.current = _ref);
            }}
            value={searchValue}
            placeholder={title}
            className={styles.input}
            onChange={handleInputChange}
          />
          <div className={styles.carListContainer}>
            {filteredCarsList &&
              filteredCarsList.sort().map((item) => (
                <p key={item} onClick={() => handleCarBrandClick(item)}>
                  {_getTitle(item, type)}
                </p>
              ))}
          </div>
        </form>
        <CloseOutlined className={styles.closeButton} onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default AddNewCarPrimaryStats;
