export default function RootLayout({
    children,
    banner,
}: {
    children: React.ReactNode;
    banner: React.ReactNode;
}) {
    return <main className="min-h-screen flex flex-col">{children}</main>;
}
