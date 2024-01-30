import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function Notes() {
  const [notes, setNotes] = useState();
  const [formNotes, setFormNotes] = useState({ title: "", description: "" });
  const [notif, setNotif] = useState(true);
  useEffect(() => {
    async function fetchingData() {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes"
      );
      const listNotes = await res.json();
      setNotes(listNotes);
    }
    fetchingData();
  }, [notif]);
  console.log("Notes =", notes);
  console.log("setFormNotes =", formNotes);
  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://paace-f178cafcae7b.nevacloud.io/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formNotes),
        }
      );
      const result = await res.json();
      if (result?.success) {
        console.log("result", result);
        setNotif(true);
        setFormNotes({ title: "", description: "" });
      }
    } catch (error) {
      console.log("Err", error);
    }
  };
  useEffect(() => {
    if (notif) {
      setTimeout(() => {
        setNotif(false);
      }, 3000);
    }
  }, [notif]);
  return (
    <LayoutComponent
      metaTitle="Notes"
      metaDescription="ini adalah halaman Notes Page"
      metaKeyword="Notes, Belajar Next"
    >
      {/* ALERT */}
      {notif && (
        <div
          role="alert"
          className="alert alert-success absolute w-1/3 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Notes Tersimpan</span>
        </div>
      )}
      <div className=" container mx-auto">
        {/* FORM */}
        <div className=" flex justify-center">
          <div className=" w-1/2 border p-4 my-4 shadow-sm">
            <h1 className=" text-2xl font-bold">Form Notes</h1>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                placeholder="..."
                className="input input-bordered w-full "
                onChange={(e) =>
                  setFormNotes({ ...formNotes, title: e.target.value })
                }
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="..."
                onChange={(e) =>
                  setFormNotes({ ...formNotes, description: e.target.value })
                }
              ></textarea>
            </label>
            <button
              className="btn btn-primary w-full my-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
        {/* LIST NOTES */}
        <div className=" grid grid-cols-3 gap-4 my-6">
          {notes?.data?.map((note) => (
            <div className="card bg-base-100 shadow-xl" key={note.id}>
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn  btn-error">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
}
