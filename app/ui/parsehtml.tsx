const ParseHtml = ({ htmlString }: { htmlString: string }) => {
	return <div className="lists" dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default ParseHtml;
