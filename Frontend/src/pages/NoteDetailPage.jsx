import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router"; // fixed imports
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../libs/axios.js";

const NoteDetailPage = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("error in fetching note", error);
        toast.error("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and Content are required");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error updating the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-100 shadow-lg">
          <LoaderIcon className="animate-spin text-primary w-10 h-10" />
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost flex items-center gap-2">
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back to Notes</span>
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline flex items-center gap-2">
              <Trash2Icon className="h-5 w-5" />
              <span>Delete Note</span>
            </button>
          </div>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="form-control mb-4 w-full">
                <label className="label block mb-2">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  value={note.title}
                  className="input input-bordered w-full rounded-2xl"
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4 w-full">
                <label className="label block mb-2">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 w-full rounded-2xl"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                ></textarea>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
