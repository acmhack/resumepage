import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Input, Button, Icon, Switch, Radio, Form, Divider } from 'antd';
import Highlighter from 'react-highlight-words';
import './security.js';

var data = [];

function viewResume(resume) {
  var pdfAsDataUri = "data:application/pdf;base64," + resume;
  var win = window.open();
  win.document.write('<iframe src="' + pdfAsDataUri + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
}


const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'List of Participants';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

export default class UserComponent extends Component {
  constructor(props) {
	super(props);
	this.state = { users: [] };
  }

  componentDidMount() {
	axios.get('http://dashboard.pickhacks.io:5000/users/')
	  .then(response => {
		this.setState({ users: response.data });

	  })
	  .catch((error) => {
		console.log(error);
	  })
  }

  state = {
	bordered: false,
	loading: false,
	pagination,
	size: 'default',
	//expandedRowRender,
	title: undefined,
	showHeader,
	footer,
	//rowSelection: {},
	scroll: undefined,
	hasData: true,
	tableLayout: undefined,
	searchText: '',
	searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
	filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
	  <div style={{ padding: 8 }}>
		<Input
		  ref={node => {
			this.searchInput = node;
		  }}
		  placeholder={`Search ${dataIndex}`}
		  value={selectedKeys[0]}
		  onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
		  onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
		  style={{ width: 188, marginBottom: 8, display: 'block' }}
		/>
		<Button
		  type="primary"
		  onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
		  icon="search"
		  size="small"
		  style={{ width: 90, marginRight: 8 }}
		>
		  Search
        </Button>
		<Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
		  Reset
        </Button>
	  </div>
	),
	filterIcon: filtered => (
	  <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
	),
	onFilter: (value, record) =>
	  record[dataIndex]
	  ? record[dataIndex]
		.toString()
		.toLowerCase()
		  .includes(value.toLowerCase())
		: false,
	onFilterDropdownVisibleChange: visible => {
	  if (visible) {
		setTimeout(() => this.searchInput.select());
	  }
	},
	render: text =>
	  this.state.searchedColumn === dataIndex ? (
		<Highlighter
		  highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
		  searchWords={[this.state.searchText]}
		  autoEscape
		  textToHighlight={text.toString()}
		/>
	  ) : (
		  text
		),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
	confirm();
	this.setState({
	  searchText: selectedKeys[0],
	  searchedColumn: dataIndex,
	});
  };

  handleReset = clearFilters => {
	clearFilters();
	this.setState({ searchText: '' });
  };
  handleToggle = prop => enable => {
	this.setState({ [prop]: enable });
  };

  handleSizeChange = e => {
	this.setState({ size: e.target.value });
  };

  handleTableLayoutChange = e => {
	this.setState({ tableLayout: e.target.value });
  };

  handleExpandChange = enable => {
	this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  };

  handleEllipsisChange = enable => {
	this.setState({ ellipsis: enable });
  };

  handleTitleChange = enable => {
	this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = enable => {
	this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = enable => {
	this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = enable => {
	this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = enable => {
	this.setState({ scroll: enable ? scroll : undefined });
  };

  handleDataChange = hasData => {
	this.setState({ hasData });
  };

  handlePaginationChange = e => {
	const { value } = e.target;
	this.setState({
	  pagination: value === 'none' ? false : { position: value },
	});
  };

  render() {

	const { state } = this;

	const columns = [{
	  title: 'Name',
	  dataIndex: 'profile.name',
	  key: 'name',
	  ...this.getColumnSearchProps('name'),
	  sorter: (a, b) => a.profile.name.localeCompare(b.profile.name),
	  render: text => <p>{text}</p>,
	},
	{
	  title: 'School',
	  dataIndex: 'profile.school',
	  key: 'school',
	  ...this.getColumnSearchProps('school'),
	  sorter: (a, b) => a.profile.school.localeCompare(b.profile.school),
	  render: text => <p>{text}</p>,
	},
	{
	  title: 'Email',
	  dataIndex: 'email',
	  key: 'email',
	  ...this.getColumnSearchProps('email'),
	  sorter: (a, b) => a.email.localeCompare(b.email),
	  render: text => <p>{text}</p>,
	},
	{
	  title: 'Major',
	  dataIndex: 'profile.major',
	  key: 'major',
	  ...this.getColumnSearchProps('major'),
	  sorter: (a, b) => a.profile.major.localeCompare(b.profile.major),
	  render: text => <p>{text}</p>,
	},
	{
	  title: 'Graduation Year',
	  dataIndex: 'profile.graduationYear',
	  key: 'graduationYear',
	  defaultSortOrder: 'descend',
	  ...this.getColumnSearchProps('graduationYear'),
	  sorter: (a, b) => a.profile.graduationYear - b.profile.graduationYear,
	  render: text => <p>{text}</p>,
	},
	{
	  title: 'Action',
	  key: 'action',
	  render: (text, record) => (
		<span>
		  <a type="submit" onClick={() => { viewResume(record.resume) }}>View</a>
		  <Divider type="vertical" />
		  <a>Download</a>
		</span>
	  ),
	},];
	return (
	  <div>
		<Form
		  layout="inline"
		  className="components-table-demo-control-bar"
		  style={{ marginBottom: 16 }}
		>
		</Form>
		<Table
		  {...this.state}
		  columns={columns.map(item => ({ ...item, ellipsis: columns.ellipsis }))}
		  dataSource={this.state.users}
		/>
	  </div>
	);
  }
}
