import { Card } from "./ui/card";
import { Music } from "lucide-react";

export const SpotifyCard = () => {
  return (
    <Card className="p-6 border-border bg-card hover-lift overflow-hidden">
      <div className="flex items-start gap-4">
        {/* Album Art Placeholder */}
        <div className="w-20 h-20 rounded-md bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-border">
          <Music className="h-8 w-8 text-green-500" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Now Playing</span>
          </div>
          
          <h4 className="font-bold text-foreground truncate mb-1">
            Your Favorite Song
          </h4>
          <p className="text-sm text-muted-foreground truncate">
            Artist Name • Album
          </p>
          
          {/* Progress Bar */}
          <div className="mt-3 h-1 bg-border rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <a 
          href="https://open.spotify.com/playlist/02zbKZaUjPLubfMkGb0Iyv?si=581be5a63e57464d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-green-500 transition-colors flex items-center gap-2"
        >
          <Music className="h-3 w-3" />
          Listen on Spotify
        </a>
      </div>
    </Card>
  );
};
