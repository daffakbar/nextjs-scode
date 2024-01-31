import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/layouts"));

export default function Notes() {
  const [notes, setNotes] = useState();
  const [formNotes, setFormNotes] = useState({ title: "", description: "" });
  const [notif, setNotif] = useState(false);
  const [editNote, setEditNote] = useState(false);
  const [editId, setEditId] = useState();

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
  // console.log("Notes =", notes);

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
        setNotif("save");
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
  const handleEditNote = async (id) => {
    setEditNote(true);
    setEditId(id);
    const res = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
    );
    const listNotes = await res.json();
    console.log("listNotes", listNotes?.data.title);
    setFormNotes((prevFormNotes) => ({
      ...prevFormNotes,
      title: listNotes.data.title,
      description: listNotes.data.description,
    }));
  };
  const handeEditSubmit = async (id) => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formNotes?.title,
            description: formNotes?.description,
          }),
        }
      );
      const result = await response.json();
      if (result?.success) {
        setNotif("edit");
        setFormNotes({ title: "", description: "" });
        setEditNote(false);
      }
    } catch (error) {}
  };

  console.log("setFormNotes =", formNotes);
  const HandleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const result = await response.json();
      if (result?.success) {
        setNotif("delete");
      }
    } catch (error) {}
  };

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
          className={`alert ${
            notif === "save"
              ? "alert-success"
              : notif === "edit"
              ? "alert-warning"
              : "alert-error"
          } absolute w-1/3 right-5`}
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
          <span>
            Notes{" "}
            {notif === "save"
              ? "Tersimpan"
              : notif === "edit"
              ? "Berubah"
              : "Terhapus"}
          </span>
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
                value={formNotes.title}
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
                value={formNotes.description}
                onChange={(e) =>
                  setFormNotes({ ...formNotes, description: e.target.value })
                }
              ></textarea>
            </label>
            {editNote ? (
              <button
                className="btn btn-primary w-full my-2"
                onClick={() => handeEditSubmit(editId)}
              >
                Edit Note
              </button>
            ) : (
              <button
                className="btn btn-primary w-full my-2"
                onClick={handleSubmit}
              >
                Save
              </button>
            )}
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
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditNote(note.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn  btn-error"
                    onClick={() => HandleDelete(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
}
