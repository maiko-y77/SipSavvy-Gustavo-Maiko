import Dialog from "@/components/Dialog/Dialog";

const page = () => {
  return (
    <Dialog>
        <h1>Your wine journey begins here.</h1>
        <p>But first, we would love to know your name.</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Your name here" name="name" />
          </div>
          <button type="submit">Let&#39;s Begin!</button>
        </form>
    </Dialog>
  );
};

export default page;
