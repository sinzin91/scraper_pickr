/* assembled by tenzin wangdhen circa 2015 */
/* TODO */
// scraper for every option
// JS for search listing, product page, or both?

/* Options without scrapers */
/*
URL | JS | List+Sale | Wiser Filter: 
URL | JS | In-cart | Wiser Filter:
URL | JS | CSE | Wiser Filter:
URL | JS | Just List | Wiser Filter: 
URL | JS | List+Sale | No Wiser Filter: 
URL | No-JS | CSE | Wiser Filter:
URL | No-JS | Just List | No Wiser Filter:
Search | Direct to Product | JS | CSE | Wiser Filter:
Search | Direct to Product | JS | Just List | Wiser Filter:
Search | Search Listing | JS | In-cart | Wiser Filter: 
Search | Search Listing | JS | CSE | Wiser Filter:
Search | Search Listing | JS | Just List | Wiser Filter:
Search | Direct to Product | JS | List+Sale | No Wiser Filter:
Search | Direct to Product | JS | CSE | No Wiser Filter:
Search | Direct to Product | JS | Just List | No Wiser Filter:
Search | Search Listing | JS | List+Sale | No Wiser Filter:
Search | Search Listing | JS | CSE | No Wiser Filter:
Search | Search Listing | JS | Just List | No Wiser Filter:
Search | Direct to Product | No-JS | CSE | Wiser Filter:
Search | Search Listing | No-JS | CSE | Wiser Filter: 
Search | Direct to Product | No-JS | CSE | No Wiser Filter:
Search | Search Listing | No-JS | List+Sale | No Wiser Filter:
Search | Search Listing | No-JS | CSE | No Wiser Filter:
*/

var err_message = "Sorry, no scraper fits this template.  Let Tenzin know if you have one!"

function displayScraper_onsubmit()
{
	/* Bad selection handling */


	// URL and Search selected
	if (document.scraperForm.urlInsertion.checked && 
		document.scraperForm.search.checked)
	{
		alert("You can't check both URL Insertion AND Search, pick one!");
		return;
	}

	// URL and direct to product selected
	if (document.scraperForm.urlInsertion.checked && 
		document.scraperForm.DirectToProduct.checked)
	{
		alert("URL Insertion is by definition direct to product, pick one!");
		return;
	}

	// URL and In-cart selected while Javascript not selected
	if (document.scraperForm.urlInsertion.checked == true &&
		document.scraperForm.InCart.checked == true &&
		!document.scraperForm.Javascript.checked == true)
	{
		alert("In-cart scrapers need Javascript!");
		return;
	}

	// MV selected while Javascript not selected
	if ((document.scraperForm.urlInsertion.checked == true &&
		document.scraperForm.MV.checked == true &&
		!document.scraperForm.Javascript.checked == true) ||
		(document.scraperForm.search.checked == true &&
		document.scraperForm.MV.checked == true &&
		!document.scraperForm.Javascript.checked == true))
	{
		alert("Multiple variation scrapers need Javascript!");
		return;
	}

	// More than one of List and Sale/In-cart/CSE selected 
	if ((document.scraperForm.ListAndSale.checked == true &&
		document.scraperForm.InCart.checked == true) || 
		(document.scraperForm.ListAndSale.checked == true &&
		document.scraperForm.CSE.checked == true) ||
		(document.scraperForm.InCart.checked == true &&
		document.scraperForm.CSE.checked == true))
	{
		alert("A scraper can only be list and sale, or in-cart, or a comparison shopping engine.  Please pick one.");
		return;
	}
	
	// Begin scraper pickr logic
	if (document.scraperForm.urlInsertion.checked == true)
	{
		if (document.scraperForm.Javascript.checked == true) 
		{
			if (!document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | JS | List+Sale | No Filter: " + err_message + err_message);
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | JS | In-cart | No Filter: g/gettington.com_incart_southshore.json");
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | JS | CSE | No Filter: n/newegg.com_gogotech.json");
				}
				else if (document.scraperForm.MV.checked == true)
				{
					alert("URL | JS | MV | No Filter: " + err_message + err_message);
				}
				else 
				{
					alert("URL | JS | Just List | No Filter: a/AvastUS_mcafee.json");
				} 
			}
			else // filter
			{
				if (document.scraperForm.ListAndSale.checked == true) 
				{
					alert("URL | JS | List+Sale | Filter: " + err_message);
				} 
				else if (document.scraperForm.InCart.checked == true)
				{
					alert("URL | JS | In-cart | Filter: " + err_message);
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | JS | CSE | Filter: " + err_message);
				}
				else if (document.scraperForm.MV.checked == true)
				{
					alert("URL | JS | MV | Filter: b/bestbuyeyeglasses.com_luxottica.json");
				}
				else 
				{
					alert("URL | JS | Just List | Filter: " + err_message);
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
					alert("URL | No JS | In-cart | Filter: " + err_message);
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | No JS | CSE | Filter: " + err_message);
				}
				else if (document.scraperForm.MV.checked == true)
				{
					alert("URL | No JS | MV | Filter: " + err_message);
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
					alert("URL | No JS | In-cart | No Filter: " + err_message);
				} 
				else if (document.scraperForm.CSE.checked == true)
				{
					alert("URL | No JS | CSE | No Filter: n/neweggbusiness.com_telquest.json");
				}
				else if (document.scraperForm.MV.checked == true)
				{
					alert("URL | No JS | MV | No Filter: " + err_message);
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
			if (!document.scraperForm.Filter.checked == true) 
			{
				if (document.scraperForm.DirectToProduct.checked == true) 
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | DirectToProduct| JS | List+Sale | No Filter: " + err_message);
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| JS | In-cart | No Filter: h/homedepot.com_incart_southshore.json");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| JS | CSE | No Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | DirectToProduct| JS | MV | No Filter: " + err_message);
					}
					else 
					{
						alert("Search | DirectToProduct| JS | Just List | No Filter: " + err_message);
					} 
				}
				else // search listing
				{
					if (document.scraperForm.ListAndSale.checked == true) 
					{
						alert("Search | Search Listing | JS | List+Sale | No Filter: " + err_message);
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | JS | In-cart | No Filter: n/nordstrom.com_perryellis.json");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | JS | CSE | No Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | DirectToProduct| JS | MV | No Filter: " + err_message);
					}
					else 
					{
						alert("Search | Search Listing | JS | Just List | No Filter: " + err_message);
					} 
				}
			}
			else // filter
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
						alert("Search | DirectToProduct| JS | CSE | Filter: m/medizinfuchs.de_eav.json");
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | DirectToProduct| JS | MV | Filter: " + err_message);
					}
					else 
					{
						alert("Search | DirectToProduct| JS | Just List | Filter: e/expert.fi_verkkokauppa.json");
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
						alert("Search | Search Listing | JS | In-cart | Filter: " + err_message);
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | JS | CSE | Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | Search Listing | JS | MV | Filter: " + err_message);
					}
					else 
					{
						alert("Search | Search Listing | JS | Just List | Filter: e/eaccutech.com_anixter.json");
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
						alert("Search | DirectToProduct| No JS | CSE | Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | DirectToProduct | No JS | MV | Filter: " + err_message);
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
						alert("Search | Search Listing | No JS | In-cart | Filter: " + err_message);
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | No JS | CSE | Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | Search Listing | No JS | MV | Filter: " + err_message);
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
						alert("Search | DirectToProduct| No JS | List+Sale | No Filter: " + err_message);
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | DirectToProduct| No JS | In-cart | No Filter: N/A, need JS for in-cart!");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | DirectToProduct| No JS | CSE | No Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | DirectToProduct | No JS | MV | No Filter: " + err_message);
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
						alert("Search | Search Listing | No JS | List+Sale | No Filter: " + err_message);
					} 
					else if (document.scraperForm.InCart.checked == true)
					{
						alert("Search | Search Listing | No JS | In-cart | No Filter: N/A, need JS for in-cart!");
					} 
					else if (document.scraperForm.CSE.checked == true)
					{
						alert("Search | Search Listing | No JS | CSE | No Filter: " + err_message);
					}
					else if (document.scraperForm.MV.checked == true)
					{
						alert("Search | Search Listing | No JS | MV | No Filter: " + err_message);
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