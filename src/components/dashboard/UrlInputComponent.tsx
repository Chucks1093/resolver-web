import { useState } from "react";
import { Link as LinkIcon, Plus, X, Globe } from "lucide-react";
import showToast from "@/utils/toast.utils";

export interface UrlItem {
	id: string;
	url: string;
	title: string;
}

interface UrlInputComponentProps {
	urls: UrlItem[];
	onUrlsChange: (urls: UrlItem[]) => void;
	maxUrls?: number;
	className?: string;
}

const UrlInputComponent: React.FC<UrlInputComponentProps> = ({
	urls,
	onUrlsChange,
	maxUrls = 5,
	className = "",
}) => {
	const [newUrl, setNewUrl] = useState("");

	const addUrl = () => {
		if (!newUrl.trim()) {
			showToast.error("Please enter a URL");
			return;
		}

		// Check if maximum URLs reached
		if (urls.length >= maxUrls) {
			showToast.error(`You can only add up to ${maxUrls} URLs`);
			return;
		}

		// Basic URL validation
		try {
			const url = new URL(newUrl.trim());

			// Check if URL already exists
			const urlExists = urls.some((item) => item.url === newUrl.trim());
			if (urlExists) {
				showToast.error("This URL has already been added");
				return;
			}

			const newUrlItem: UrlItem = {
				id: Math.random().toString(36).substr(2, 9),
				url: newUrl.trim(),
				title: url.hostname, // Use hostname as default title
			};

			onUrlsChange([...urls, newUrlItem]);
			setNewUrl("");
			showToast.success("URL added successfully");
		} catch {
			showToast.error(
				"Please enter a valid URL (e.g., https://example.com)"
			);
		}
	};

	const removeUrl = (id: string) => {
		const updatedUrls = urls.filter((item) => item.id !== id);
		onUrlsChange(updatedUrls);
		showToast.success("URL removed");
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addUrl();
		}
	};

	const isMaxUrls = urls.length >= maxUrls;

	return (
		<div className={`bg-white p-6 rounded-2xl border shadow-sm ${className}`}>
			<div className='flex items-center gap-2 mb-4'>
				<h3 className='text-lg font-semibold text-gray-800'>
					Reference Links
				</h3>
				<LinkIcon className='w-4 h-4 text-gray-400' />
			</div>
			<p className='text-sm text-gray-600 mb-6'>
				Add links to articles, videos, or resources you want to reference
				during your session
			</p>

			<div className='space-y-4'>
				{/* URL Input */}
				<div>
					<h4 className='font-medium text-gray-700 mb-3 flex items-center gap-2'>
						<LinkIcon className='w-4 h-4' />
						Add Links ({urls.length}/{maxUrls})
					</h4>
					<div className='flex gap-2'>
						<input
							type='url'
							value={newUrl}
							onChange={(e) => setNewUrl(e.target.value)}
							placeholder='https://example.com/article'
							className={`flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
								isMaxUrls ? "opacity-50 cursor-not-allowed" : ""
							}`}
							onKeyPress={handleKeyPress}
							disabled={isMaxUrls}
						/>
						<button
							type='button'
							onClick={addUrl}
							disabled={isMaxUrls || !newUrl.trim()}
							className='px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
							<Plus className='w-4 h-4' />
						</button>
					</div>
					{isMaxUrls && (
						<p className='text-sm text-amber-600 mt-2'>
							Maximum {maxUrls} URLs reached. Remove a URL to add
							another.
						</p>
					)}
				</div>

				{/* URLs List */}
				{urls.length > 0 && (
					<div className='space-y-3'>
						<h4 className='font-medium text-gray-700'>
							Added Links ({urls.length})
						</h4>
						{urls.map((urlItem) => (
							<div
								key={urlItem.id}
								className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
								<div className='flex items-center gap-3 flex-1 min-w-0'>
									<Globe className='size-5 text-green-500 flex-shrink-0' />
									<div className='flex-1 min-w-0'>
										<p className='font-medium text-gray-800 text-sm truncate'>
											{urlItem.title}
										</p>
										<a
											href={urlItem.url}
											target='_blank'
											rel='noopener noreferrer'
											className='text-xs text-blue-500 hover:text-blue-600 truncate block'>
											{urlItem.url}
										</a>
									</div>
								</div>
								<button
									type='button'
									onClick={() => removeUrl(urlItem.id)}
									className='text-gray-400 bg-gray-200 hover:bg-red-100 hover:text-red-500 transition-colors rounded-full flex items-center justify-center p-1 ml-2 flex-shrink-0'>
									<X className='w-4 h-4' />
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default UrlInputComponent;
