// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, Search, Filter, MoreVertical, Download, Sparkles, Info, Grid } from 'lucide-react';

// const TestCasesInterface = () => {
//   const [activeTab, setActiveTab] = useState('Repository');
//   const [expandedFolders, setExpandedFolders] = useState({
//     Authentication: true,
//     Login: false,
//     Administration: false,
//     Configuration: false,
//     Users: false
//   });
//   const [showCreateTestCase, setShowCreateTestCase] = useState(false);

//   const folders = [
//     {
//       name: 'Authentication',
//       count: 4,
//       total: 12,
//       children: [
//         { name: 'Login', count: 2, total: 6 },
//         { name: 'Logout', count: 2, total: 2 }
//       ]
//     },
//     {
//       name: 'Administration',
//       count: 0,
//       total: 8,
//       children: [
//         { name: 'Role', count: 0, total: 7 },
//         { name: 'API Key', count: 1, total: 1 }
//       ]
//     },
//     {
//       name: 'Configuration',
//       count: 1,
//       total: 12,
//       children: [
//         { name: 'Browsers', count: 5, total: 5 },
//         { name: 'Devices', count: 6, total: 6 }
//       ]
//     },
//     { name: 'Users', count: 0, total: 31 },
//     { name: 'Usability', count: 17, total: 17 },
//     { name: 'Performance', count: 14, total: 14 },
//     { name: 'Security', count: 6, total: 6 }
//   ];

//   const testCases = [
//     { id: 'TC-103', title: 'testmo', draggable: true },
//     { id: 'TC-99', title: 'TEstsarvind', draggable: true },
//     { id: 'TC-1', title: 'Verify that valid user credentials result in successful authentication.', draggable: true },
//     { id: 'TC-2', title: 'Ensure that the user is redirected to the correct landing page after successful authenti...', draggable: true }
//   ];

//   const toggleFolder = (folderName) => {
//     setExpandedFolders(prev => ({
//       ...prev,
//       [folderName]: !prev[folderName]
//     }));
//   };

//   const renderRepositoryContent = () => (
//     <div className="flex h-full">
//       {/* Left Sidebar */}
//       <div className="w-96 bg-gray-50 border-r border-gray-200 overflow-y-auto">
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-sm font-medium text-gray-700">Folders</h3>
//             <button className="p-1 hover:bg-gray-200 rounded">
//               <div className="w-4 h-4 border border-gray-400 rounded"></div>
//             </button>
//           </div>
          
//           <div className="mb-4 text-xs text-gray-500 flex items-center gap-2">
//             <Filter size={12} />
//             Sort by: Custom
//             <span className="ml-auto">(100)</span>
//           </div>

//           <div className="space-y-1">
//             {folders.map((folder, index) => (
//               <div key={folder.name}>
//                 <div className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
//                   <div className="flex items-center gap-2">
//                     {folder.children && (
//                       <button 
//                         onClick={() => toggleFolder(folder.name)}
//                         className="p-0.5"
//                       >
//                         {expandedFolders[folder.name] ? 
//                           <ChevronDown size={12} /> : 
//                           <ChevronRight size={12} />
//                         }
//                       </button>
//                     )}
//                     <div className="w-4 h-3 bg-blue-500 rounded-sm"></div>
//                     <span className="text-sm text-gray-700">{folder.name}</span>
//                   </div>
//                   <span className="text-xs text-gray-500">
//                     {folder.count}({folder.total})
//                   </span>
//                 </div>
                
//                 {folder.children && expandedFolders[folder.name] && (
//                   <div className="ml-6 space-y-1">
//                     {folder.children.map((child) => (
//                       <div key={child.name} className="flex items-center justify-between py-2 px-2 hover:bg-gray-100 rounded cursor-pointer">
//                         <div className="flex items-center gap-2">
//                           <ChevronRight size={12} />
//                           <div className="w-4 h-3 bg-blue-400 rounded-sm"></div>
//                           <span className="text-sm text-gray-600">{child.name}</span>
//                         </div>
//                         <span className="text-xs text-gray-500">
//                           {child.count}({child.total})
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
//           <div className="flex items-center gap-2">
//             <span className="text-lg font-medium">Authentication</span>
//             <Info size={16} className="text-gray-400" />
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="relative">
//               <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search by Test Case ID or Title"
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 text-sm"
//               />
//             </div>
//             <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
//               <Filter size={16} />
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 overflow-auto">
//           <div className="p-4">
//             <table className="w-full">
//               <thead>
//                 <tr className="text-left text-xs text-gray-500 uppercase tracking-wider border-b">
//                   <th className="pb-3 w-12">
//                     <input type="checkbox" className="rounded" />
//                   </th>
//                   <th className="pb-3 w-24">ID</th>
//                   <th className="pb-3">TITLE</th>
//                   <th className="pb-3 w-8">F</th>
//                   <th className="pb-3 w-12"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {testCases.map((testCase, index) => (
//                   <tr key={testCase.id} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3">
//                       <div className="flex items-center gap-2">
//                         {testCase.draggable && (
//                           <div className="flex flex-col gap-1">
//                             <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//                             <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//                             <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
//                           </div>
//                         )}
//                         <input type="checkbox" className="rounded" />
//                       </div>
//                     </td>
//                     <td className="py-3 text-sm text-gray-900">{testCase.id}</td>
//                     <td className="py-3 text-sm text-gray-900">{testCase.title}</td>
//                     <td className="py-3"></td>
//                     <td className="py-3">
//                       <button className="p-1 hover:bg-gray-100 rounded">
//                         <MoreVertical size={16} className="text-gray-400" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Bottom Input */}
//         <div className="border-t border-gray-200 p-4 bg-white">
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <Sparkles size={16} className="text-blue-500" />
//               <span className="text-sm text-gray-600">AI steps</span>
//               <ChevronDown size={16} className="text-gray-400" />
//             </div>
//             <div className="flex-1">
//               <input 
//                 type="text" 
//                 placeholder="Enter test case title and press ✨ to generate test case details using AI"
//                 className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 flex items-center gap-2">
//               <Sparkles size={16} />
//               Create
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSharedStepsContent = () => (
//     <div className="flex-1 flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Info size={24} className="text-gray-500" />
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 mb-2">No Shared Steps Available</h3>
//         <p className="text-gray-500 mb-6 max-w-md">
//           Create a shared step by clicking below and save time by reusing it across multiple test cases & runs.
//         </p>
//         <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           Create Shared Step
//         </button>
//       </div>
//     </div>
//   );

//   const renderDatasetsContent = () => (
//     <div className="flex-1 flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <Grid size={24} className="text-teal-600" />
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 mb-2">Unlock Datasets with a pro plan</h3>
//         <p className="text-gray-500 mb-6 max-w-md">
//           Upgrade now to simplify repetitive test creation and maximize coverage with reusable test data.
//         </p>
//         <div className="flex gap-3 justify-center">
//           <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
//             Learn More
//           </button>
//           <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">
//             Upgrade Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const renderCreateTestCase = () => (
//     <div className="fixed inset-0 bg-white z-50 flex flex-col">
//       <div className="border-b border-gray-200 p-4 bg-white">
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-semibold">Create Test Case</h2>
//           <button 
//             onClick={() => setShowCreateTestCase(false)}
//             className="text-gray-400 hover:text-gray-600"
//           >
//             ✕
//           </button>
//         </div>
//       </div>
//       <div className="flex-1 p-8 overflow-auto">
//         <div className="max-w-2xl mx-auto space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Test Case Title *
//             </label>
//             <input 
//               type="text" 
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter test case title"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea 
//               rows={4}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter test case description"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Priority
//             </label>
//             <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option>High</option>
//               <option>Medium</option>
//               <option>Low</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Test Steps
//             </label>
//             <div className="space-y-2">
//               <div className="flex gap-2">
//                 <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">1</div>
//                 <input 
//                   type="text" 
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter test step"
//                 />
//               </div>
//               <div className="flex gap-2">
//                 <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm">2</div>
//                 <input 
//                   type="text" 
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter test step"
//                 />
//               </div>
//               <button className="text-blue-500 text-sm hover:text-blue-600">+ Add Step</button>
//             </div>
//           </div>

//           <div className="flex gap-3 pt-6">
//             <button 
//               onClick={() => setShowCreateTestCase(false)}
//               className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//               Create Test Case
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   if (showCreateTestCase) {
//     return renderCreateTestCase();
//   }

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* Header */}
//       <div className="border-b border-gray-200 px-6 py-4">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-semibold text-gray-900">Test Cases</h1>
//           <div className="flex items-center gap-3">
//             <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
//               <Download size={16} />
//             </button>
//             <button 
//               onClick={() => setShowCreateTestCase(true)}
//               className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
//             >
//               Create Test Case
//             </button>
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2">
//               <Sparkles size={16} />
//               Generate with AI
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="border-b border-gray-200">
//         <nav className="flex px-6">
//           {['Repository', 'Shared Steps', 'Datasets'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-3 text-sm font-medium border-b-2 ${
//                 activeTab === tab
//                   ? 'border-blue-500 text-blue-600'
//                   : 'border-transparent text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {activeTab === 'Repository' && renderRepositoryContent()}
//         {activeTab === 'Shared Steps' && renderSharedStepsContent()}
//         {activeTab === 'Datasets' && renderDatasetsContent()}
//       </div>
//     </div>
//   );
// };

// export default TestCasesInterface;
