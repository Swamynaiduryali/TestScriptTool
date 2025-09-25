import React, { useState } from 'react';
import { X, Settings, Info, GripVertical, Plus, Upload, Share2, Search, MoreHorizontal, Bold, Italic, Underline, Strikethrough, Image, Code, List, ListOrdered, Table, Link } from 'lucide-react';

export const CreateTestCase = () => {
  const [currentView, setCurrentView] = useState('create'); // 'create' or 'configure'
  const [configActiveTab, setConfigActiveTab] = useState('testCaseFields');
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    preconditions: '',
    owner: 'Myself (Lucky Ind)',
    state: 'Active',
    priority: '',
    typeOfTestCase: '',
    automationStatus: 'Not Automated',
    tags: '',
    template: 'Test Case Steps',
  });

  const [steps, setSteps] = useState([{ id: 1, step: '', result: '' }]);
  const [createAnother, setCreateAnother] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Configuration data
  const testCaseFields = [
    {
      id: 1,
      name: 'Priority',
      values: 'Critical, High, Low, Medium',
      projects: 'All Projects',
      type: 'System'
    },
    {
      id: 2,
      name: 'Type',
      values: 'Acceptance, Accessibility, Compatibility, Destructive, Functional, Other',
      projects: 'All Projects',
      type: 'System'
    },
    {
      id: 3,
      name: 'State',
      values: 'Active, Draft, In Review, Outdated, Rejected',
      projects: 'All Projects',
      type: 'System'
    }
  ];

  const priorityOptions = [
    { value: '', label: '— Select priority', icon: '—' },
    { value: 'Medium', label: '— Medium', icon: '—' },
    { value: 'Critical', label: '⚠ Critical', icon: '⚠' },
    { value: 'High', label: '↑ High', icon: '↑' },
    { value: 'Low', label: '↓ Low', icon: '↓' },
  ];

  const testCaseTypes = [
    'Other',
    'Acceptance',
    'Accessibility',
    'Compatibility',
    'Destructive',
    'Functional',
  ];

  const stateOptions = [
    { value: 'Active', label: '✓ Active', icon: '✓' },
    { value: 'Draft', label: '✏️ Draft', icon: '✏️' },
    { value: 'In Review', label: '💬 In Review', icon: '💬' },
    { value: 'Outdated', label: '🚫 Outdated', icon: '🚫' },
    { value: 'Rejected', label: '👎 Rejected', icon: '👎' },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStepChange = (id, field, value) => {
    setSteps(prev => prev.map(step => 
      step.id === id ? { ...step, [field]: value } : step
    ));
  };

  const addStep = () => {
    const newId = Math.max(...steps.map(s => s.id)) + 1;
    setSteps(prev => [...prev, { id: newId, step: '', result: '' }]);
  };

  const addSharedStep = () => {
    console.log('Add shared step clicked');
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleConfigureClick = () => {
    setCurrentView('configure');
  };

  const handleBackToCreate = () => {
    setCurrentView('create');
  };

  // Filter fields based on search
  const filteredFields = testCaseFields.filter(field => 
    field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.values.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (currentView === 'configure') {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl flex flex-col max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBackToCreate}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Create Test Case
              </button>
              <h2 className="text-xl font-semibold text-gray-800">Test Case Field Configuration</h2>
            </div>
            <button className="text-gray-600 hover:text-gray-800">
              <X size={20} />
            </button>
          </div>

          {/* Configuration Content */}
          <div className="flex-1 overflow-hidden">
            {/* Header Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setConfigActiveTab('testCaseFields')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    configActiveTab === 'testCaseFields'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  📁 Test Case Fields
                </button>
                <button
                  onClick={() => setConfigActiveTab('testResultFields')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    configActiveTab === 'testResultFields'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  📊 Test Result Fields
                </button>
              </nav>
            </div>

            {/* Configuration Content Area */}
            <div className="p-6 overflow-y-auto h-full">
              {/* Search and Create Field */}
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search field by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Plus size={16} className="mr-2" />
                  Create Field
                </button>
              </div>

              {/* Fields Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-medium text-gray-700">FIELDS</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">PROJECTS</th>
                      <th className="text-left py-3 px-6 font-medium text-gray-700">TYPE</th>
                      <th className="text-right py-3 px-6 font-medium text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFields.map((field) => (
                      <tr key={field.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-6">
                          <div>
                            <div className="font-medium text-gray-900">{field.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{field.values}</div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-700">{field.projects}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            field.type === 'System' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {field.type}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
            <button 
              onClick={handleBackToCreate}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Create Test Case View
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Create Test Case</h2>
          <button className="text-gray-600 hover:text-gray-800">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Section */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Title and Template */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter test case name"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="w-48">
                <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.template}
                  onChange={(e) => handleInputChange('template', e.target.value)}
                >
                  <option>Test Case Steps</option>
                  <option>Basic Template</option>
                  <option>Advanced Template</option>
                  <option>Custom Template</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write in brief about the test"
                rows={4}
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            {/* Preconditions */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Preconditions</label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Define any preconditions about the test"
                rows={4}
                value={formData.preconditions}
                onChange={(e) => handleInputChange('preconditions', e.target.value)}
              />
            </div>

            {/* Steps and Results */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Steps and Results</h3>
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-2 mb-2">
                  <div className="flex items-center gap-1 w-10">
                    <GripVertical size={16} className="text-gray-500" />
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Step</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Details of the step"
                        rows={3}
                        value={step.step}
                        onChange={(e) => handleStepChange(step.id, 'step', e.target.value)}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Result</label>
                      <textarea
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Expected Result"
                        rows={3}
                        value={step.result}
                        onChange={(e) => handleStepChange(step.id, 'result', e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className="mt-6 p-2 text-blue-500 hover:text-blue-700"
                    onClick={addStep}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                <button
                  className="flex items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={addStep}
                >
                  <Plus size={16} />
                  Add Step
                </button>
                <button
                  className="flex items-center gap-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                  onClick={addSharedStep}
                >
                  <Share2 size={16} />
                  Add Shared Step
                </button>
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Attachments</h3>
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  id="file-upload"
                  accept="*/*"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
                >
                  <Upload size={16} />
                  Upload Files
                </label>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Max. file size: 50 MB | Max. files: 10 (per upload)
              </div>
              {uploadedFiles.length > 0 && (
                <div className="mt-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <span>{file.name}</span>
                      <span>({Math.round(file.size / 1024)} KB)</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Create Another Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={createAnother}
                onChange={(e) => setCreateAnother(e.target.checked)}
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-sm text-gray-700">Create another</label>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80 bg-gray-50 p-6 border-l border-gray-200 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Test Case Fields</h3>
              <button 
                onClick={handleConfigureClick}
                className="flex items-center gap-1 text-blue-500 hover:text-blue-700"
              >
                <Settings size={16} />
                Configure
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Owner <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.owner}
                  onChange={(e) => handleInputChange('owner', e.target.value)}
                >
                  <option>Myself (Lucky Ind)</option>
                  <option>Other User</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                >
                  {stateOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                >
                  {priorityOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Test Case <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.typeOfTestCase}
                  onChange={(e) => handleInputChange('typeOfTestCase', e.target.value)}
                >
                  <option value="">Select type of test case</option>
                  {testCaseTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Automation Status <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.automationStatus}
                  onChange={(e) => handleInputChange('automationStatus', e.target.value)}
                >
                  <option>Not Automated</option>
                  <option>Automated</option>
                  <option>To be Automated</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  Tags
                  <Info size={14} className="text-gray-500" />
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Add tags and hit +"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                />
              </div>

              <div>
                <p className="text-sm text-gray-700 mb-2">Setup your requirement management tool</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Jira', 'Azure', 'Asana', 'Linear', 'ClickUp', 'DevRev'].map(tool => (
                    <button
                      key={tool}
                      className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200"
                    >
                      <span className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-xs font-semibold">
                        {tool[0]}
                      </span>
                      {tool}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t border-gray-200">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};