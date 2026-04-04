export default function InputField({ placeholder, type = "input", ...props }) {
    const sharedClass =
        "border border-gray-300 px-4 py-2 transition-colors focus:outline-none w-full text-sm";

    if (type === "textarea") {
        return (
            <textarea
                placeholder={placeholder}
                className={sharedClass}
                rows={4}
                style={{ maxHeight: "200px" }} // Tinggi tidak bisa diubah
                {...props}
            />
        );
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            className={sharedClass}
            {...props}
        />
    );
}