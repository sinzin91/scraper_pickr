var scraperIndex = 0;
var scraperForm = document.scraperForm;
function radioToggle_onclick()
{
	if (document.scraperForm.urlInsertion.checked == true)
	{
		document.scraperForm.search.checked == false;
	} 
	else if (document.scraperForm.search.checked == true)
	{
		document.scraperForm.urlInsertion.checked == false;
	}
}
function displayScraper_onsubmit()
{
	if (document.scraperForm.urlInsertion.checked == true)
	{
		if (document.scraperForm.Javascript.checked == true) 
		{
			if (document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | JS | List+Sale | Filter: ");
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | JS | In-cart | Filter: ");
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | JS | CSE | Filter: ");
				}
				else 
				{
					alert("URL | JS | Just List | Filter:");
				} 
			}
			else // no filter
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | JS | List+Sale | No Filter: ");
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | JS | In-cart | No Filter: g/gettington.com_incart_southshore.json");
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | JS | CSE | No Filter: n/newegg.com_gogotech.json");
				}
				else 
				{
					alert("URL | JS | Just List | No Filter: a/AvastUS_mcafee.json");
				} 
			}
		}
		else // no JS
		{
			if (document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | No JS | List+Sale | Filter: b/boscovs.com_southshore.json");
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | No JS | In-cart | Filter: ");
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | No JS | CSE | Filter: ");
				}
				else 
				{
					alert("URL | No JS | Just List | Filter: a/airsoftgi.com_airsoftmegastore.json");
				} 
			}
			else // no filter
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | No JS | List+Sale | No Filter: 0-9/6pm.com_perryellis.json");
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | No JS | In-cart | No Filter: ");
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | No JS | CSE | No Filter: n/neweggbusiness.com_telquest.json");
				}
				else 
				{
					alert("URL | No JS | Just List | No Filter: c/coppel.com_famsa");
				} 
			}
		}
	}
	else // search
	{
		if (document.scraperForm.Javascript.checked == true) 
		{
			if (document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.DirectToProduct.checked == true) 
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | DirectToProduct| JS | List+Sale | Filter: h/homedepot.com_listsale_southshore.json");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| JS | In-cart | Filter:  b/bestbuy.ca_incart_southshore.json");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| JS | CSE | Filter: ");
					}
					else 
					{
						alert("Search | DirectToProduct| JS | Just List | Filter:");
					} 
				}
				else // search listing
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | Search Listing | JS | List+Sale | Filter: c/cymax.ca_listsale_southshore.json");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | JS | In-cart | Filter:");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | JS | CSE | Filter: ");
					}
					else 
					{
						alert("Search | Search Listing | JS | Just List | Filter:");
					} 
				}
			}
			else // no filter
			{
				if (document.scraperForm.DirectToProduct.checked == true) 
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | DirectToProduct| JS | List+Sale | No Filter: ");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| JS | In-cart | No Filter: h/homedepot.com_incart_southshore.json");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| JS | CSE | No Filter: ");
					}
					else 
					{
						alert("Search | DirectToProduct| JS | Just List | No Filter:");
					} 
				}
				else // search listing
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | Search Listing | JS | List+Sale | No Filter: ");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | JS | In-cart | No Filter: n/nordstrom.com_perryellis.json");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | JS | CSE | No Filter: ");
					}
					else 
					{
						alert("Search | Search Listing | JS | Just List | No Filter:");
					} 
				}
			}
		}
		else // no JS
		{
			if (document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.DirectToProduct.checked == true) 
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | DirectToProduct| No JS | List+Sale | Filter: b/bestbuy.ca_southshore.json");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| No JS | In-cart | Filter: N/A, need JS for in-cart!");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| No JS | CSE | Filter: ");
					}
					else 
					{
						alert("Search | DirectToProduct| No JS | Just List | Filter: c/cpooutlets.com_totaltools.json");
					} 
				}
				else // search listing
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | Search Listing | No JS | List+Sale | Filter: p/prokit.com_proav.json");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | No JS | In-cart | Filter: ");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | No JS | CSE | Filter: ");
					}
					else 
					{
						alert("Search | Search Listing | No JS | Just List | Filter: 0-9/3dbroadcastsales.com_proav.json");
					} 
				}
			}
			else // no filter
			{
				if (document.scraperForm.DirectToProduct.checked == true) 
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | DirectToProduct| No JS | List+Sale | No Filter: b/burlingtoncoatfactory.com_southshore.json");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| No JS | In-cart | No Filter: N/A, need JS for in-cart!");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| No JS | CSE | No Filter: ");
					}
					else 
					{
						alert("Search | DirectToProduct| No JS | Just List | No Filter: e/euronics.fi_verkkokauppa.json");
					} 
				}
				else // search listing
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | Search Listing | No JS | List+Sale | No Filter: ");
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | No JS | In-cart | No Filter: N/A, need JS for in-cart!");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | No JS | CSE | No Filter: ");
					}
					else 
					{
						alert("Search | Search Listing | No JS | Just List | No Filter: n/nfm.com_southshore.json");
					} 
				}
			}
		} 
	} 
}