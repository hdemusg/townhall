export default function ReportProblemRoute() {
    return (
        <div>
            <p>Report a problem.</p>
            <form method="post">
                <div>
                    <label>
                        Problem: <input type="text" name="problem" />
                    </label>
                </div>
                <div>
                    <label>
                        Content: <textarea name="content" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}