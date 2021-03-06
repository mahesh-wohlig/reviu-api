<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Json extends CI_Controller 
{
	
    public function GetCategoryList()
    {
        $data['message']=$this->category_model->getcategorylist();
		$this->load->view('json',$data);
    }

	function postVideo()
	{
		$title=$this->input->get_post('title');
		$useremail=$this->input->get_post('useremail');
		$userid=$this->user_model->getuseridbyemail($useremail);
		$latitude=$this->input->get_post('latitude');
		$longitude=$this->input->get_post('longitude');
		$location=$this->input->get_post('location');
		$rating=$this->input->get_post('rating');
		$category=$this->input->get_post('category');
		//$image=$this->input->get_post('image');
//		$video=$this->input->get_post('video');
        
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'mp4|3gp|flv|mp3';
		$this->load->library('upload', $config);
		$filename="video";
		$video="";
		if (  $this->upload->do_upload($filename))
		{
            $uploaddata = $this->upload->data();
            $video=$uploaddata['file_name'];
		}
        
        $config['upload_path'] = './uploads/';
		$config['allowed_types'] = 'gif|jpg|png';
		$this->load->library('upload', $config);
		$filename="image";
		$image="";
		if (  $this->upload->do_upload($filename))
		{
            $uploaddata = $this->upload->data();
            $image=$uploaddata['file_name'];
		}
        
		$data["message"]=$this->video_model->postvideo($title,$userid,$latitude,$longitude,$location,$rating,$video,$category,$image);
		$this->load->view("json",$data);
	}
    
	function postVideoforapi()
	{
		$title=$this->input->get_post('title');
		$useremail=$this->input->get_post('useremail');
		$userid=$this->user_model->getuseridbyemail($useremail);
		$latitude=$this->input->get_post('lat');
		$longitude=$this->input->get_post('long');
		$location=$this->input->get_post('location');
		$productlink=$this->input->get_post('productlink');
		$price=$this->input->get_post('price');
		$type=$this->input->get_post('type');
		$rating=$this->input->get_post('rating');
		$category=$this->input->get_post('category');
		$image=$this->input->get_post('image');
		$video=$this->input->get_post('video');
		$siteurl=$this->input->get_post('siteurl');
		$siteuser=$this->input->get_post('siteusernew');
		$tag=$this->input->get_post('tag');
$video=substr($video, 8);
        $siteurl=base64_decode($siteurl);
		$data["message"]=$this->video_model->postvideoforapi($title,$userid,$latitude,$longitude,$location,$rating,$video,$category,$image,$siteurl,$siteuser,$tag,$type,$productlink,$price);
		$this->load->view("json",$data);
	}
    
    public function getvideosforuser()
    {
		$useremail=$this->input->get_post('useremail');
		$userid=$this->user_model->getuseridbyemail($useremail);
		$category=$this->input->get_post('category');
        $data['message']=$this->video_model->getvideosforuser($userid,$category);
		$this->load->view('json',$data);
    }
    public function getallparentcategories()
    {
        $data['message']=$this->category_model->getallparentcategories();
		$this->load->view('json',$data);
    }
    
    public function getsubcategory()
    {
        $id=$this->input->get_post('id');
        $data['message']=$this->category_model->getsubcategory($id);
		$this->load->view('json',$data);
    }
    public function getlistingbycategory()
    {
        $categoryid=$this->input->get_post('id');
        $data['message']=$this->listing_model->getlistingbycategory($categoryid);
		$this->load->view('json',$data);
    }
    public function getonelistingbyid()
    {
        $listingid=$this->input->get_post('id');
        $data['message']=$this->listing_model->getonelistingbyid($listingid);
		$this->load->view('json',$data);
    }
    public function getlistingbycity()
    {
        $cityid=$this->input->get_post('id');
        $data['message']=$this->listing_model->getlistingbycity($cityid);
		$this->load->view('json',$data);
    }
    //search
    
    public function searchcategory()
    {
        $category=$this->input->get_post('categoryname');
        $data['message']=$this->category_model->searchcategory($category);
		$this->load->view('json',$data);
    }
    
    public function getvideosbyuser()
    {
        $userid=$this->input->get_post('userid');
        $data['message']=$this->video_model->getvideosbyuser($userid);
		$this->load->view('json',$data);
    }
    public function getimageofuser()
    {
        $userid=$this->input->get_post('userid');
        $data['message']=$this->user_model->getuserimagebyid($userid);
		$this->load->view('json',$data);
    }
    public function getcategorydropdownfront() {
        $data1 = $this->video_model->getcategorydropdown();
        $data["message"] = $data1;
        $this->load->view("json", $data);
    }
     
    public function getvideosbysiteurl()
    {
        $siteurl=$this->input->get_post('siteurl');
        $siteurl=base64_decode($siteurl);
//        echo $siteurl;
        $data['message']=$this->video_model->getvideosbysiteurl($siteurl);
		$this->load->view('json',$data);
    } 
    public function getvideobyidforpopup()
    {
        $id=$this->input->get_post('id');
//        echo $id;
        $data['message']=$this->video_model->getvideobyidforpopup($id);
		$this->load->view('api1',$data);
    }
    public function adduserlikes()
    {
        $videoid=$this->input->get_post('videoid');
        $user=$this->input->get_post('user');
//        echo $id;
        $data['message']=$this->video_model->adduserlikes($videoid,$user);
        $data['message']=$this->video_model->getvideobyidforpopup($videoid);
		$this->load->view('api1',$data);
    }
    
    public function addviewcount()
    {
        $videoid=$this->input->get_post('videoid');
        $data['message']=$this->video_model->addviewcount($videoid);
//        $data['message']=$this->video_model->getvideobyidforpopup($videoid);
//		$this->load->view('api1',$data);
    }
    
	function postvideofromapp()
	{
//        print_r($_POST);
		$operator=$this->input->get_post('operatorId');
        
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = 'mp4|3gp|flv|mp3|png|mov';
        $config['max_size']	= '10000000000';
		$this->load->library('upload', $config);
		$filename="videoFile";
		$video="";
		if (  $this->upload->do_upload($filename))
		{
            $uploaddata = $this->upload->data();
            $video=$uploaddata['file_name'];
		}
        
//        $operator;
		$data["message"]=$this->video_model->postvideofromapp($operator,$video);
		$this->load->view("json",$data);
	}
    
    function getuseridfromhash()
    {
        $hashid=$this->input->get_post('hashid');
        $data["message"]=$this->user_model->getuseridfromhash($hashid);
		$this->load->view("json",$data);
        
    }
    
}
?>