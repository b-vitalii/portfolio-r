import React from "react";
import style from "../ContactForm/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={style.row}>
      <div className={style.contact_form}>
        <div className={style.row}>
          <div className={style.form_item + " " + style.col_6}>
            <div className={style.form_group}>
              <input
                type="text"
                className={style.form_control}
                placeholder="Name"
              />
            </div>
          </div>
          <div className={style.form_item + " " + style.col_6}>
            <div className={style.form_group}>
              <input
                type="email"
                className={style.form_control}
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.form_item + " " + style.col_12}>
            <div className={style.form_group}>
              <input
                type="text"
                className={style.form_control}
                placeholder="Subject"
              />
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.form_item + " " + style.col_12}>
            <div className={style.form_group}>
              <textarea
                name=""
                className={style.form_control}
                id=""
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.form_item + " " + style.col_12}>
            <button type="submit" className={style.btn}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
