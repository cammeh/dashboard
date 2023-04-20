import axios from "axios";
import { db } from "./firebase";
import dayjs from "dayjs";
import {
  doc,
  addDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import FireStoreParser from "firestore-parser";
import { useState, useEffect } from "react";

const KEYS = {
  staff: "staff",
  staffId: "staffId",
};

export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export const insertStaff = (data) => {
  let staff = getAllStaff("staff");
  data["id"] = generateStaffId();
  staff.push(data);
  localStorage.setItem(KEYS.staff, JSON.stringify(staff));
};

export const updateStaff = (data) => {
  let staff = getAllStaff();
  let recordIndex = staff.findIndex((x) => x.id == data.id);
  staff[recordIndex] = { ...data };
  localStorage.setItem(KEYS.staff, JSON.stringify(staff));
};

export const deleteStaff = (id) => {
  let staff = getAllStaff();
  staff = staff.filter((x) => x.id != id);
  localStorage.setItem(KEYS.staff, JSON.stringify(staff));
};

export function generateStaffId() {
  if (localStorage.getItem(KEYS.staffId) == null)
    localStorage.setItem(KEYS.staffId, "0");
  var id = parseInt(localStorage.getItem(KEYS.staffId));
  localStorage.setItem(KEYS.staffId, (++id).toString());
  return id;
}

export const getAllStaff = () => {
  const [docs, setDocs] = useState([]);
  let departments = getDepartmentCollection();

  useEffect(() => {
    const unsubscribe = async () => {
      const querySnapshot = await getDocs(collection(db, "staff"));

      const document = [];
      querySnapshot.forEach((doc) => {
        document.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setDocs(document);
    };

    return unsubscribe;
  }, []);

  return docs.map((item) => ({
    ...item,
    department: departments[item.departmentId - 1].title,
  }));
};
